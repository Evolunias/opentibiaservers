import Serenity100OldSchoolServerKeywordPage, { generateMetadata } from './serenity-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity100OldSchoolServerKeywordPage />;
}
