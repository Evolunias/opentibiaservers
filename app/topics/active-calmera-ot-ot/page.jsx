import ActiveCalmeraOtOtKeywordPage, { generateMetadata } from './active-calmera-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCalmeraOtOtKeywordPage />;
}
