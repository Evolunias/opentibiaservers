import TibiaretroGuideKeywordPage, { generateMetadata } from './tibiaretro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroGuideKeywordPage />;
}
