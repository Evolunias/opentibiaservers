import NewThaisotOtServerKeywordPage, { generateMetadata } from './new-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotOtServerKeywordPage />;
}
