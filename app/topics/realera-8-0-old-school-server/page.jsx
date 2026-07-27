import Realera80OldSchoolServerKeywordPage, { generateMetadata } from './realera-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera80OldSchoolServerKeywordPage />;
}
