import BestNostaltherOtsKeywordPage, { generateMetadata } from './best-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNostaltherOtsKeywordPage />;
}
