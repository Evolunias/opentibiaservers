import Gunzodus15OldSchoolServerKeywordPage, { generateMetadata } from './gunzodus-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus15OldSchoolServerKeywordPage />;
}
