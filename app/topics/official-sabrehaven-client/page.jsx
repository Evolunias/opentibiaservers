import OfficialSabrehavenClientKeywordPage, { generateMetadata } from './official-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenClientKeywordPage />;
}
