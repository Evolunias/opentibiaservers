import GunzodusMexicoServerKeywordPage, { generateMetadata } from './gunzodus-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusMexicoServerKeywordPage />;
}
