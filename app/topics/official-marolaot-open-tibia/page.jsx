import OfficialMarolaotOpenTibiaKeywordPage, { generateMetadata } from './official-marolaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotOpenTibiaKeywordPage />;
}
