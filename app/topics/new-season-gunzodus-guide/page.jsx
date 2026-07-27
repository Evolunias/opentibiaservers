import NewSeasonGunzodusGuideKeywordPage, { generateMetadata } from './new-season-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusGuideKeywordPage />;
}
