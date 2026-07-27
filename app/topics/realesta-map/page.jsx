import RealestaMapKeywordPage, { generateMetadata } from './realesta-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaMapKeywordPage />;
}
