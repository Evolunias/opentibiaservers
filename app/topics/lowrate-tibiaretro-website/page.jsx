import LowrateTibiaretroWebsiteKeywordPage, { generateMetadata } from './lowrate-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroWebsiteKeywordPage />;
}
