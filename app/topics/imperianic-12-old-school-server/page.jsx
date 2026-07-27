import Imperianic12OldSchoolServerKeywordPage, { generateMetadata } from './imperianic-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic12OldSchoolServerKeywordPage />;
}
