import FreshStartLumineraRulesKeywordPage, { generateMetadata } from './fresh-start-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraRulesKeywordPage />;
}
