import CustomMidhemOtServerKeywordPage, { generateMetadata } from './custom-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemOtServerKeywordPage />;
}
