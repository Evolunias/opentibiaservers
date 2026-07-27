import TopLumineraRulesKeywordPage, { generateMetadata } from './top-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraRulesKeywordPage />;
}
