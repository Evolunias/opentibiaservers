import BestGunzodusGuideKeywordPage, { generateMetadata } from './best-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusGuideKeywordPage />;
}
