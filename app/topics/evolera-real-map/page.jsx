import EvoleraRealMapKeywordPage, { generateMetadata } from './evolera-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraRealMapKeywordPage />;
}
