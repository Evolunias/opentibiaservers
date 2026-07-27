import Otmadness13OldSchoolServerKeywordPage, { generateMetadata } from './otmadness-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness13OldSchoolServerKeywordPage />;
}
