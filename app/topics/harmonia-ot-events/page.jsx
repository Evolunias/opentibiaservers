import HarmoniaOtEventsKeywordPage, { generateMetadata } from './harmonia-ot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtEventsKeywordPage />;
}
