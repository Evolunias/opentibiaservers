import OfficialTibiaoriginsOfficialKeywordPage, { generateMetadata } from './official-tibiaorigins-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsOfficialKeywordPage />;
}
