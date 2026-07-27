import RealeraGermanyServerKeywordPage, { generateMetadata } from './realera-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraGermanyServerKeywordPage />;
}
