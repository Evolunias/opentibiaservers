import ActiveLumineraRulesKeywordPage, { generateMetadata } from './active-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraRulesKeywordPage />;
}
