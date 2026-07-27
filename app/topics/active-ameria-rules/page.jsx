import ActiveAmeriaRulesKeywordPage, { generateMetadata } from './active-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaRulesKeywordPage />;
}
