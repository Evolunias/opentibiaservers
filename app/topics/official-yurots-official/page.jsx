import OfficialYurotsOfficialKeywordPage, { generateMetadata } from './official-yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsOfficialKeywordPage />;
}
