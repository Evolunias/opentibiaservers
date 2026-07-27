import NewEvoleraServerKeywordPage, { generateMetadata } from './new-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraServerKeywordPage />;
}
