import BestEvoleraClientKeywordPage, { generateMetadata } from './best-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraClientKeywordPage />;
}
