import Imperianic15OldSchoolServerKeywordPage, { generateMetadata } from './imperianic-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic15OldSchoolServerKeywordPage />;
}
