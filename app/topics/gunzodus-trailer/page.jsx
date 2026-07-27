import GunzodusTrailerKeywordPage, { generateMetadata } from './gunzodus-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusTrailerKeywordPage />;
}
