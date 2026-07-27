import GunzodusSouthAmericaServerKeywordPage, { generateMetadata } from './gunzodus-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusSouthAmericaServerKeywordPage />;
}
