import NewMidhemOtsKeywordPage, { generateMetadata } from './new-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemOtsKeywordPage />;
}
