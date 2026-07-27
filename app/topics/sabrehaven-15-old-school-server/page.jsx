import Sabrehaven15OldSchoolServerKeywordPage, { generateMetadata } from './sabrehaven-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15OldSchoolServerKeywordPage />;
}
