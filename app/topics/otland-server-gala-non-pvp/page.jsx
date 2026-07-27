import OtlandServerGalaNonPvpKeywordPage, { generateMetadata } from './otland-server-gala-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaNonPvpKeywordPage />;
}
