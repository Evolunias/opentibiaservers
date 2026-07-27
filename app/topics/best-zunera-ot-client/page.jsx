import BestZuneraOtClientKeywordPage, { generateMetadata } from './best-zunera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZuneraOtClientKeywordPage />;
}
