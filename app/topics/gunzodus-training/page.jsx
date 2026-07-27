import GunzodusTrainingKeywordPage, { generateMetadata } from './gunzodus-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusTrainingKeywordPage />;
}
