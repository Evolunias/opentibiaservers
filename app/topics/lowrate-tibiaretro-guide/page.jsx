import LowrateTibiaretroGuideKeywordPage, { generateMetadata } from './lowrate-tibiaretro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroGuideKeywordPage />;
}
