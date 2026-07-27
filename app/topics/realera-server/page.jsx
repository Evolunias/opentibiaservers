import RealeraServerKeywordPage, { generateMetadata } from './realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraServerKeywordPage />;
}
