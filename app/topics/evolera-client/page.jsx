import EvoleraClientKeywordPage, { generateMetadata } from './evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraClientKeywordPage />;
}
