import ActiveEvoleraKeywordPage, { generateMetadata } from './active-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraKeywordPage />;
}
