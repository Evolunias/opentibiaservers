import Luminera81PvpServerKeywordPage, { generateMetadata } from './luminera-8-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81PvpServerKeywordPage />;
}
