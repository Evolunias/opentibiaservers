import DuraOnline15OldSchoolServerKeywordPage, { generateMetadata } from './dura-online-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline15OldSchoolServerKeywordPage />;
}
