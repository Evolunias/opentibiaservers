import FreshStartEvoleraClientKeywordPage, { generateMetadata } from './fresh-start-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoleraClientKeywordPage />;
}
