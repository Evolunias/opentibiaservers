import ActiveTibiaretroWebsiteKeywordPage, { generateMetadata } from './active-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroWebsiteKeywordPage />;
}
