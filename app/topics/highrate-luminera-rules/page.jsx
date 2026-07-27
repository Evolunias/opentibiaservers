import HighrateLumineraRulesKeywordPage, { generateMetadata } from './highrate-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraRulesKeywordPage />;
}
