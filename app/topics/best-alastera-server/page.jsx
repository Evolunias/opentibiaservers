import BestAlasteraServerKeywordPage, { generateMetadata } from './best-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraServerKeywordPage />;
}
