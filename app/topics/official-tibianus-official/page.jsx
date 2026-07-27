import OfficialTibianusOfficialKeywordPage, { generateMetadata } from './official-tibianus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusOfficialKeywordPage />;
}
