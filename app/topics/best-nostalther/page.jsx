import BestNostaltherKeywordPage, { generateMetadata } from './best-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNostaltherKeywordPage />;
}
