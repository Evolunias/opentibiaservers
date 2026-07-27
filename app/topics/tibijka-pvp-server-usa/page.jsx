import TibijkaPvpServerUsaKeywordPage, { generateMetadata } from './tibijka-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpServerUsaKeywordPage />;
}
