import ActiveNepreniaOfficialKeywordPage, { generateMetadata } from './active-neprenia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaOfficialKeywordPage />;
}
