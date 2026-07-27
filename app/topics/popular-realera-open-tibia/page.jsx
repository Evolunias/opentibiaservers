import PopularRealeraOpenTibiaKeywordPage, { generateMetadata } from './popular-realera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraOpenTibiaKeywordPage />;
}
