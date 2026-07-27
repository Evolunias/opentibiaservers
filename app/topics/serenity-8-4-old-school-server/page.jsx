import Serenity84OldSchoolServerKeywordPage, { generateMetadata } from './serenity-8-4-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84OldSchoolServerKeywordPage />;
}
