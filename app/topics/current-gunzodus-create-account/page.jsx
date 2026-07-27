import CurrentGunzodusCreateAccountKeywordPage, { generateMetadata } from './current-gunzodus-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusCreateAccountKeywordPage />;
}
