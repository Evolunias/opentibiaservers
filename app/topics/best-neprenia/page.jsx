import BestNepreniaKeywordPage, { generateMetadata } from './best-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaKeywordPage />;
}
