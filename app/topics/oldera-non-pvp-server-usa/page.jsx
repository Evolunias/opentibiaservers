import OlderaNonPvpServerUsaKeywordPage, { generateMetadata } from './oldera-non-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaNonPvpServerUsaKeywordPage />;
}
