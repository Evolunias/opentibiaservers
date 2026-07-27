import PopularRealestaOpenTibiaKeywordPage, { generateMetadata } from './popular-realesta-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaOpenTibiaKeywordPage />;
}
