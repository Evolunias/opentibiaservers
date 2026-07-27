import TopMediviaRulesKeywordPage, { generateMetadata } from './top-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaRulesKeywordPage />;
}
