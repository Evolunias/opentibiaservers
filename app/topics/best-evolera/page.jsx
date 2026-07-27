import BestEvoleraKeywordPage, { generateMetadata } from './best-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraKeywordPage />;
}
