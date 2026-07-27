import GunzodusBrazilServerKeywordPage, { generateMetadata } from './gunzodus-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusBrazilServerKeywordPage />;
}
