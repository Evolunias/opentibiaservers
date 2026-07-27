import HighrateMediviaRulesKeywordPage, { generateMetadata } from './highrate-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaRulesKeywordPage />;
}
