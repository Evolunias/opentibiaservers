import BestNostaltherOtKeywordPage, { generateMetadata } from './best-nostalther-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNostaltherOtKeywordPage />;
}
