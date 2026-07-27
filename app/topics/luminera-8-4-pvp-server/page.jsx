import Luminera84PvpServerKeywordPage, { generateMetadata } from './luminera-8-4-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera84PvpServerKeywordPage />;
}
