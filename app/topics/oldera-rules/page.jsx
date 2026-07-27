import OlderaRulesKeywordPage, { generateMetadata } from './oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaRulesKeywordPage />;
}
