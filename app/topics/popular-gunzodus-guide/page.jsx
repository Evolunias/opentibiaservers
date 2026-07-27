import PopularGunzodusGuideKeywordPage, { generateMetadata } from './popular-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusGuideKeywordPage />;
}
