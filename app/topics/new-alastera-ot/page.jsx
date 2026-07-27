import NewAlasteraOtKeywordPage, { generateMetadata } from './new-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraOtKeywordPage />;
}
