import LowrateLumineraRulesKeywordPage, { generateMetadata } from './lowrate-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraRulesKeywordPage />;
}
