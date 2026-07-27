import Imperianic13OldSchoolServerKeywordPage, { generateMetadata } from './imperianic-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic13OldSchoolServerKeywordPage />;
}
