import OfficialTibiascapeCreateAccountKeywordPage, { generateMetadata } from './official-tibiascape-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeCreateAccountKeywordPage />;
}
