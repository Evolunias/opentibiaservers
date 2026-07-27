import Luminera71PvpServerKeywordPage, { generateMetadata } from './luminera-7-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71PvpServerKeywordPage />;
}
