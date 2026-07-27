import OfficialBlazeraOtKeywordPage, { generateMetadata } from './official-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraOtKeywordPage />;
}
