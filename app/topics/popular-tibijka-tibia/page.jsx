import PopularTibijkaTibiaKeywordPage, { generateMetadata } from './popular-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibijkaTibiaKeywordPage />;
}
