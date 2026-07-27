import Luminera14PvpServerKeywordPage, { generateMetadata } from './luminera-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14PvpServerKeywordPage />;
}
