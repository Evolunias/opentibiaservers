import NoResetMidhemOtsKeywordPage, { generateMetadata } from './no-reset-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemOtsKeywordPage />;
}
