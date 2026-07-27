import OriginaltibiaCreateAccountKeywordPage, { generateMetadata } from './originaltibia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaCreateAccountKeywordPage />;
}
