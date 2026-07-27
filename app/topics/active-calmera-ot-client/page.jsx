import ActiveCalmeraOtClientKeywordPage, { generateMetadata } from './active-calmera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCalmeraOtClientKeywordPage />;
}
