import GunzodusEventsKeywordPage, { generateMetadata } from './gunzodus-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusEventsKeywordPage />;
}
