import BestAlasteraLoginKeywordPage, { generateMetadata } from './best-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraLoginKeywordPage />;
}
