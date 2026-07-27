import OfficialMarolaotTibiaKeywordPage, { generateMetadata } from './official-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotTibiaKeywordPage />;
}
