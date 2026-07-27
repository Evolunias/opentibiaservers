import TopEvoleraOtServerKeywordPage, { generateMetadata } from './top-evolera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraOtServerKeywordPage />;
}
