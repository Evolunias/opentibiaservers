import OtlandServerGalaPvpKeywordPage, { generateMetadata } from './otland-server-gala-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaPvpKeywordPage />;
}
