import Otmadness11OldSchoolServerKeywordPage, { generateMetadata } from './otmadness-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness11OldSchoolServerKeywordPage />;
}
