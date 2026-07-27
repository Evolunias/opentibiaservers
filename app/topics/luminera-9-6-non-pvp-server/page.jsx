import Luminera96NonPvpServerKeywordPage, { generateMetadata } from './luminera-9-6-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96NonPvpServerKeywordPage />;
}
