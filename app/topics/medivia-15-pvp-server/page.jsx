import Medivia15PvpServerKeywordPage, { generateMetadata } from './medivia-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15PvpServerKeywordPage />;
}
