import Realera15OldSchoolServerKeywordPage, { generateMetadata } from './realera-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15OldSchoolServerKeywordPage />;
}
