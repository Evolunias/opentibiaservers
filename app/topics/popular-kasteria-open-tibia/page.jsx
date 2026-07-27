import PopularKasteriaOpenTibiaKeywordPage, { generateMetadata } from './popular-kasteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaOpenTibiaKeywordPage />;
}
