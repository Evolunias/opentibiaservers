import BestAlasteraPrivateServerKeywordPage, { generateMetadata } from './best-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraPrivateServerKeywordPage />;
}
