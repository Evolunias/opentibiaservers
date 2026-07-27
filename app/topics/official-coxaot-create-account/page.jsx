import OfficialCoxaotCreateAccountKeywordPage, { generateMetadata } from './official-coxaot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotCreateAccountKeywordPage />;
}
