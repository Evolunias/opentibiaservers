import CustomMidhemOtsKeywordPage, { generateMetadata } from './custom-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemOtsKeywordPage />;
}
