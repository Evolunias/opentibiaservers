import NewSaintsotOtServerKeywordPage, { generateMetadata } from './new-saintsot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotOtServerKeywordPage />;
}
