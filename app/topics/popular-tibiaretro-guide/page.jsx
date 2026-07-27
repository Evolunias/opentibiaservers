import PopularTibiaretroGuideKeywordPage, { generateMetadata } from './popular-tibiaretro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroGuideKeywordPage />;
}
