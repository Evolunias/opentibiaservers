import SerenityOldSchoolServerUsaKeywordPage, { generateMetadata } from './serenity-old-school-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityOldSchoolServerUsaKeywordPage />;
}
