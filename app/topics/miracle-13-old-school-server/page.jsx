import Miracle13OldSchoolServerKeywordPage, { generateMetadata } from './miracle-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13OldSchoolServerKeywordPage />;
}
