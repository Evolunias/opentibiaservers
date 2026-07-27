import TopMarolaotTibiaKeywordPage, { generateMetadata } from './top-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotTibiaKeywordPage />;
}
