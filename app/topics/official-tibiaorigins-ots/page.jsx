import OfficialTibiaoriginsOtsKeywordPage, { generateMetadata } from './official-tibiaorigins-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsOtsKeywordPage />;
}
