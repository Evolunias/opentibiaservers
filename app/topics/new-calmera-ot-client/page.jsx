import NewCalmeraOtClientKeywordPage, { generateMetadata } from './new-calmera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCalmeraOtClientKeywordPage />;
}
