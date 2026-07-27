import Luminera80NonPvpServerKeywordPage, { generateMetadata } from './luminera-8-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80NonPvpServerKeywordPage />;
}
