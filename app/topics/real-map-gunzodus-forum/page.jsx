import RealMapGunzodusForumKeywordPage, { generateMetadata } from './real-map-gunzodus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusForumKeywordPage />;
}
