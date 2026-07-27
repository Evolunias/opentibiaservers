import PopularMarolaotTibiaKeywordPage, { generateMetadata } from './popular-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotTibiaKeywordPage />;
}
