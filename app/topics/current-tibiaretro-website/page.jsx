import CurrentTibiaretroWebsiteKeywordPage, { generateMetadata } from './current-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroWebsiteKeywordPage />;
}
