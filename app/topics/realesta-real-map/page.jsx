import RealestaRealMapKeywordPage, { generateMetadata } from './realesta-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaRealMapKeywordPage />;
}
