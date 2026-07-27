import OfficialNoxiousotRulesKeywordPage, { generateMetadata } from './official-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotRulesKeywordPage />;
}
