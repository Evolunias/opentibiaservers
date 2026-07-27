import FreshStartEvoleraServerKeywordPage, { generateMetadata } from './fresh-start-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoleraServerKeywordPage />;
}
