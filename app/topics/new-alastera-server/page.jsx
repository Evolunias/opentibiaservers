import NewAlasteraServerKeywordPage, { generateMetadata } from './new-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraServerKeywordPage />;
}
