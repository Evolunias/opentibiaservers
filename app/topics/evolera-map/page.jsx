import EvoleraMapKeywordPage, { generateMetadata } from './evolera-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraMapKeywordPage />;
}
