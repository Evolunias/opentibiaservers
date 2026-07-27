import OfficialAmeriaCreateAccountKeywordPage, { generateMetadata } from './official-ameria-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaCreateAccountKeywordPage />;
}
