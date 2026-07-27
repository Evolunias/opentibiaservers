import ActiveCalmeraOtOtsKeywordPage, { generateMetadata } from './active-calmera-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCalmeraOtOtsKeywordPage />;
}
