import Tibiame15OldSchoolServerKeywordPage, { generateMetadata } from './tibiame-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15OldSchoolServerKeywordPage />;
}
