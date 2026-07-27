import PopularTibiaretroWebsiteKeywordPage, { generateMetadata } from './popular-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroWebsiteKeywordPage />;
}
