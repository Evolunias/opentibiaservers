import GunzodusWithTrainersServerPolandKeywordPage, { generateMetadata } from './gunzodus-with-trainers-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusWithTrainersServerPolandKeywordPage />;
}
