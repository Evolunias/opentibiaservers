import OfficialTibiantisCreateAccountKeywordPage, { generateMetadata } from './official-tibiantis-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisCreateAccountKeywordPage />;
}
