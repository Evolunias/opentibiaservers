import Luminera86PvpServerKeywordPage, { generateMetadata } from './luminera-8-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86PvpServerKeywordPage />;
}
