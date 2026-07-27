import TibianusNonPvpServerUsaKeywordPage, { generateMetadata } from './tibianus-non-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusNonPvpServerUsaKeywordPage />;
}
