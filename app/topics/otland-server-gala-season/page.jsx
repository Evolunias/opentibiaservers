import OtlandServerGalaSeasonKeywordPage, { generateMetadata } from './otland-server-gala-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaSeasonKeywordPage />;
}
