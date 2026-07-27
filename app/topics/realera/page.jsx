import RealeraKeywordPage, { generateMetadata } from './realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraKeywordPage />;
}
