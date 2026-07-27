import OfficialTibiaoriginsGuideKeywordPage, { generateMetadata } from './official-tibiaorigins-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsGuideKeywordPage />;
}
