import OfficialTibiaoriginsRulesKeywordPage, { generateMetadata } from './official-tibiaorigins-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsRulesKeywordPage />;
}
