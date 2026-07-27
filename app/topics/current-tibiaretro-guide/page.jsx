import CurrentTibiaretroGuideKeywordPage, { generateMetadata } from './current-tibiaretro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroGuideKeywordPage />;
}
