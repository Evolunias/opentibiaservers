import Medivia15NonPvpServerKeywordPage, { generateMetadata } from './medivia-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15NonPvpServerKeywordPage />;
}
