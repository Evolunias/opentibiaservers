import Gunzodus11WithTrainersServerKeywordPage, { generateMetadata } from './gunzodus-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus11WithTrainersServerKeywordPage />;
}
