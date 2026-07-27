import Luminera11NonPvpServerKeywordPage, { generateMetadata } from './luminera-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11NonPvpServerKeywordPage />;
}
