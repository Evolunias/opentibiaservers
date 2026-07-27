import NewEvoleraOtServerKeywordPage, { generateMetadata } from './new-evolera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraOtServerKeywordPage />;
}
