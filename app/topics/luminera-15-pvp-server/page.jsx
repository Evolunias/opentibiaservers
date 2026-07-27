import Luminera15PvpServerKeywordPage, { generateMetadata } from './luminera-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15PvpServerKeywordPage />;
}
