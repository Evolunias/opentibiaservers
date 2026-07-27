import NepreniaNonPvpServerUsaKeywordPage, { generateMetadata } from './neprenia-non-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaNonPvpServerUsaKeywordPage />;
}
