import Luminera13PvpServerKeywordPage, { generateMetadata } from './luminera-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13PvpServerKeywordPage />;
}
