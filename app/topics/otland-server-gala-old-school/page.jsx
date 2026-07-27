import OtlandServerGalaOldSchoolKeywordPage, { generateMetadata } from './otland-server-gala-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaOldSchoolKeywordPage />;
}
