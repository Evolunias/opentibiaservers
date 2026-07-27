import GunzodusSimilarServersKeywordPage, { generateMetadata } from './gunzodus-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusSimilarServersKeywordPage />;
}
