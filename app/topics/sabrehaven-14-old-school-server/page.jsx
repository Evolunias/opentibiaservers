import Sabrehaven14OldSchoolServerKeywordPage, { generateMetadata } from './sabrehaven-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven14OldSchoolServerKeywordPage />;
}
