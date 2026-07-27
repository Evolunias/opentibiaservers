import TibiascapeOldSchoolServerUsaKeywordPage, { generateMetadata } from './tibiascape-old-school-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeOldSchoolServerUsaKeywordPage />;
}
