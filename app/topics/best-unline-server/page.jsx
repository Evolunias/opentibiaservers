import BestUnlineServerKeywordPage, { generateMetadata } from './best-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineServerKeywordPage />;
}
