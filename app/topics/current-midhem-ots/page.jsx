import CurrentMidhemOtsKeywordPage, { generateMetadata } from './current-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemOtsKeywordPage />;
}
