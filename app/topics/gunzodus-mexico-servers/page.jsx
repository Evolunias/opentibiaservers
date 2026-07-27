import GunzodusMexicoServersKeywordPage, { generateMetadata } from './gunzodus-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusMexicoServersKeywordPage />;
}
