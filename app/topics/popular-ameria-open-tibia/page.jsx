import PopularAmeriaOpenTibiaKeywordPage, { generateMetadata } from './popular-ameria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaOpenTibiaKeywordPage />;
}
