import BestUnlineLoginKeywordPage, { generateMetadata } from './best-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineLoginKeywordPage />;
}
