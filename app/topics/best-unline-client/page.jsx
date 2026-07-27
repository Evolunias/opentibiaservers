import BestUnlineClientKeywordPage, { generateMetadata } from './best-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineClientKeywordPage />;
}
