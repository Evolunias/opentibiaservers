import TopZuneraOtClientKeywordPage, { generateMetadata } from './top-zunera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZuneraOtClientKeywordPage />;
}
