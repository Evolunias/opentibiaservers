import GunzodusBrazilServersKeywordPage, { generateMetadata } from './gunzodus-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusBrazilServersKeywordPage />;
}
