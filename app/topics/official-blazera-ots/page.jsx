import OfficialBlazeraOtsKeywordPage, { generateMetadata } from './official-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraOtsKeywordPage />;
}
