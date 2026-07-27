import RealeraFunServerKeywordPage, { generateMetadata } from './realera-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraFunServerKeywordPage />;
}
