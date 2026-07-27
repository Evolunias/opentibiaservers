import OfficialRealeraOfficialKeywordPage, { generateMetadata } from './official-realera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraOfficialKeywordPage />;
}
