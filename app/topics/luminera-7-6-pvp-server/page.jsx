import Luminera76PvpServerKeywordPage, { generateMetadata } from './luminera-7-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera76PvpServerKeywordPage />;
}
