import ActiveMarolaotTibiaKeywordPage, { generateMetadata } from './active-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMarolaotTibiaKeywordPage />;
}
