import TopEvoleraServerKeywordPage, { generateMetadata } from './top-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraServerKeywordPage />;
}
