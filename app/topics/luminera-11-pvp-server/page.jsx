import Luminera11PvpServerKeywordPage, { generateMetadata } from './luminera-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11PvpServerKeywordPage />;
}
