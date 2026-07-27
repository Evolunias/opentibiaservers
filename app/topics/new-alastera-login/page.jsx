import NewAlasteraLoginKeywordPage, { generateMetadata } from './new-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraLoginKeywordPage />;
}
