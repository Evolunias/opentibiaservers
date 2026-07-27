import Luminera74PvpServerKeywordPage, { generateMetadata } from './luminera-7-4-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74PvpServerKeywordPage />;
}
