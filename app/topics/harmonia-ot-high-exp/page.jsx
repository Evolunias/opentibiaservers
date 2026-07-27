import HarmoniaOtHighExpKeywordPage, { generateMetadata } from './harmonia-ot-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtHighExpKeywordPage />;
}
