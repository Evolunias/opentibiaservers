import BestThorniaOtsKeywordPage, { generateMetadata } from './best-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaOtsKeywordPage />;
}
