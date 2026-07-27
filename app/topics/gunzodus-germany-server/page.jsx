import GunzodusGermanyServerKeywordPage, { generateMetadata } from './gunzodus-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusGermanyServerKeywordPage />;
}
