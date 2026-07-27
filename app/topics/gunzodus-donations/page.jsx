import GunzodusDonationsKeywordPage, { generateMetadata } from './gunzodus-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusDonationsKeywordPage />;
}
