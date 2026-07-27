import OfficialTibiaoriginsWebsiteKeywordPage, { generateMetadata } from './official-tibiaorigins-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsWebsiteKeywordPage />;
}
