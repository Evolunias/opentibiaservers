import CustomTibiaretroWebsiteKeywordPage, { generateMetadata } from './custom-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroWebsiteKeywordPage />;
}
