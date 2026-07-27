import HighrateMidhemRulesKeywordPage, { generateMetadata } from './highrate-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemRulesKeywordPage />;
}
