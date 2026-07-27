import Realera15PvpServerKeywordPage, { generateMetadata } from './realera-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15PvpServerKeywordPage />;
}
