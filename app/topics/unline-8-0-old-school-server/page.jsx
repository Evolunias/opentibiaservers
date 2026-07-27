import Unline80OldSchoolServerKeywordPage, { generateMetadata } from './unline-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline80OldSchoolServerKeywordPage />;
}
