import OfficialTibiaoriginsClientKeywordPage, { generateMetadata } from './official-tibiaorigins-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsClientKeywordPage />;
}
