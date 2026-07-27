import Gunzodus12OldSchoolServerKeywordPage, { generateMetadata } from './gunzodus-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus12OldSchoolServerKeywordPage />;
}
