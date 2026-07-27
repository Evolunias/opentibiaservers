import Gunzodus12WithTrainersServerKeywordPage, { generateMetadata } from './gunzodus-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus12WithTrainersServerKeywordPage />;
}
