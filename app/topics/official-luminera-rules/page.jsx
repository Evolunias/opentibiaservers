import OfficialLumineraRulesKeywordPage, { generateMetadata } from './official-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraRulesKeywordPage />;
}
