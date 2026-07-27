import Blazera15PvpServerKeywordPage, { generateMetadata } from './blazera-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15PvpServerKeywordPage />;
}
