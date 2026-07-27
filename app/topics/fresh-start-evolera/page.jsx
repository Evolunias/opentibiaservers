import FreshStartEvoleraKeywordPage, { generateMetadata } from './fresh-start-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoleraKeywordPage />;
}
