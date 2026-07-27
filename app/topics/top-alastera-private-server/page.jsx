import TopAlasteraPrivateServerKeywordPage, { generateMetadata } from './top-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraPrivateServerKeywordPage />;
}
