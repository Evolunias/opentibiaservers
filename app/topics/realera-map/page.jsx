import RealeraMapKeywordPage, { generateMetadata } from './realera-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraMapKeywordPage />;
}
