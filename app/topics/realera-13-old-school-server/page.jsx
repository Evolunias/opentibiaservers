import Realera13OldSchoolServerKeywordPage, { generateMetadata } from './realera-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera13OldSchoolServerKeywordPage />;
}
