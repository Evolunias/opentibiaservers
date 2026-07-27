import DemolidoresOldSchoolServerUsaKeywordPage, { generateMetadata } from './demolidores-old-school-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresOldSchoolServerUsaKeywordPage />;
}
