import GunzodusBaiakServerFranceKeywordPage, { generateMetadata } from './gunzodus-baiak-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusBaiakServerFranceKeywordPage />;
}
