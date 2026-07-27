import NewMidhemRulesKeywordPage, { generateMetadata } from './new-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemRulesKeywordPage />;
}
