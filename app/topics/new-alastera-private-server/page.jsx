import NewAlasteraPrivateServerKeywordPage, { generateMetadata } from './new-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraPrivateServerKeywordPage />;
}
