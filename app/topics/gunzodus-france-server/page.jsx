import GunzodusFranceServerKeywordPage, { generateMetadata } from './gunzodus-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusFranceServerKeywordPage />;
}
