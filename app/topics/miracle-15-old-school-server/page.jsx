import Miracle15OldSchoolServerKeywordPage, { generateMetadata } from './miracle-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle15OldSchoolServerKeywordPage />;
}
