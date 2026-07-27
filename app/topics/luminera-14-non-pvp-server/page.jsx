import Luminera14NonPvpServerKeywordPage, { generateMetadata } from './luminera-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14NonPvpServerKeywordPage />;
}
