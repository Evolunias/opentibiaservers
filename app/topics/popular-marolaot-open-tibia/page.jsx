import PopularMarolaotOpenTibiaKeywordPage, { generateMetadata } from './popular-marolaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotOpenTibiaKeywordPage />;
}
