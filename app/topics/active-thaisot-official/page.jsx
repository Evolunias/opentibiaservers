import ActiveThaisotOfficialKeywordPage, { generateMetadata } from './active-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotOfficialKeywordPage />;
}
