import CustomMidhemClientKeywordPage, { generateMetadata } from './custom-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemClientKeywordPage />;
}
