import Serenity11OldSchoolServerKeywordPage, { generateMetadata } from './serenity-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11OldSchoolServerKeywordPage />;
}
