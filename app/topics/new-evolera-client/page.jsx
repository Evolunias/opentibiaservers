import NewEvoleraClientKeywordPage, { generateMetadata } from './new-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraClientKeywordPage />;
}
