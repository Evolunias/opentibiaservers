import FreshStartMarolaotTibiaKeywordPage, { generateMetadata } from './fresh-start-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMarolaotTibiaKeywordPage />;
}
