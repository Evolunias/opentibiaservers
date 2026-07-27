import OfficialBlazeraOfficialKeywordPage, { generateMetadata } from './official-blazera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraOfficialKeywordPage />;
}
