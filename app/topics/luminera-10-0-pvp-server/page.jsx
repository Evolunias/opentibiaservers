import Luminera100PvpServerKeywordPage, { generateMetadata } from './luminera-10-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100PvpServerKeywordPage />;
}
