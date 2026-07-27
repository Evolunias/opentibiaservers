import CustomMidhemKeywordPage, { generateMetadata } from './custom-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemKeywordPage />;
}
