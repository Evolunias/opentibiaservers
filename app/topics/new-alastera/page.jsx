import NewAlasteraKeywordPage, { generateMetadata } from './new-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraKeywordPage />;
}
