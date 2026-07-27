import HighrateTibiaretroGuideKeywordPage, { generateMetadata } from './highrate-tibiaretro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroGuideKeywordPage />;
}
