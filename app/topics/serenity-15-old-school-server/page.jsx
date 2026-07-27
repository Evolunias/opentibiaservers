import Serenity15OldSchoolServerKeywordPage, { generateMetadata } from './serenity-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15OldSchoolServerKeywordPage />;
}
