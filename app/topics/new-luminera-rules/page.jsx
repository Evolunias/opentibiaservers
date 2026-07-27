import NewLumineraRulesKeywordPage, { generateMetadata } from './new-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraRulesKeywordPage />;
}
