import HighrateTibiaretroWebsiteKeywordPage, { generateMetadata } from './highrate-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroWebsiteKeywordPage />;
}
