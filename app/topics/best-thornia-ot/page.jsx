import BestThorniaOtKeywordPage, { generateMetadata } from './best-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaOtKeywordPage />;
}
