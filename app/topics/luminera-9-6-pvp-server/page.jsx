import Luminera96PvpServerKeywordPage, { generateMetadata } from './luminera-9-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96PvpServerKeywordPage />;
}
