import Serenity71OldSchoolServerKeywordPage, { generateMetadata } from './serenity-7-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71OldSchoolServerKeywordPage />;
}
