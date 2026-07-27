import NewAlasteraOtsKeywordPage, { generateMetadata } from './new-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraOtsKeywordPage />;
}
