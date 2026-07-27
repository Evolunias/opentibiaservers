import BestAlasteraClientKeywordPage, { generateMetadata } from './best-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraClientKeywordPage />;
}
