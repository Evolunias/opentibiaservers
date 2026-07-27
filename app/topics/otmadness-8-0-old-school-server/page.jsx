import Otmadness80OldSchoolServerKeywordPage, { generateMetadata } from './otmadness-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness80OldSchoolServerKeywordPage />;
}
