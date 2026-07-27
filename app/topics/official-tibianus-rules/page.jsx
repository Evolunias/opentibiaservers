import OfficialTibianusRulesKeywordPage, { generateMetadata } from './official-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusRulesKeywordPage />;
}
