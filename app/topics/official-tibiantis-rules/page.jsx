import OfficialTibiantisRulesKeywordPage, { generateMetadata } from './official-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisRulesKeywordPage />;
}
