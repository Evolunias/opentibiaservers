import PopularTibiaoriginsTibiaKeywordPage, { generateMetadata } from './popular-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsTibiaKeywordPage />;
}
