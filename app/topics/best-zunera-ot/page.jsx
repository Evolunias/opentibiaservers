import BestZuneraOtKeywordPage, { generateMetadata } from './best-zunera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZuneraOtKeywordPage />;
}
