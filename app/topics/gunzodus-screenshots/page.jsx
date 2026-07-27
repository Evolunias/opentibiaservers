import GunzodusScreenshotsKeywordPage, { generateMetadata } from './gunzodus-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusScreenshotsKeywordPage />;
}
