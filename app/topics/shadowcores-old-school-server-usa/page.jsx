import ShadowcoresOldSchoolServerUsaKeywordPage, { generateMetadata } from './shadowcores-old-school-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresOldSchoolServerUsaKeywordPage />;
}
