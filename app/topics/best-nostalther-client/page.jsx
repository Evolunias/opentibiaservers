import BestNostaltherClientKeywordPage, { generateMetadata } from './best-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNostaltherClientKeywordPage />;
}
