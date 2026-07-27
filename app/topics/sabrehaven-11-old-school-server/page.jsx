import Sabrehaven11OldSchoolServerKeywordPage, { generateMetadata } from './sabrehaven-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven11OldSchoolServerKeywordPage />;
}
