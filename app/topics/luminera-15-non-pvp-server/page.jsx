import Luminera15NonPvpServerKeywordPage, { generateMetadata } from './luminera-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15NonPvpServerKeywordPage />;
}
