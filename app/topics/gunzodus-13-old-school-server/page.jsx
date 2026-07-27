import Gunzodus13OldSchoolServerKeywordPage, { generateMetadata } from './gunzodus-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus13OldSchoolServerKeywordPage />;
}
