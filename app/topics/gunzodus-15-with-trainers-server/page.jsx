import Gunzodus15WithTrainersServerKeywordPage, { generateMetadata } from './gunzodus-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus15WithTrainersServerKeywordPage />;
}
