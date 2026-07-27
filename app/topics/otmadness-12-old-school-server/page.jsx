import Otmadness12OldSchoolServerKeywordPage, { generateMetadata } from './otmadness-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness12OldSchoolServerKeywordPage />;
}
