import Realera12OldSchoolServerKeywordPage, { generateMetadata } from './realera-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera12OldSchoolServerKeywordPage />;
}
