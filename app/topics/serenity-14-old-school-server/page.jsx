import Serenity14OldSchoolServerKeywordPage, { generateMetadata } from './serenity-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14OldSchoolServerKeywordPage />;
}
