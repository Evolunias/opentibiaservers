import CustomMidhemLoginKeywordPage, { generateMetadata } from './custom-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemLoginKeywordPage />;
}
