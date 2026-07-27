import Luminera13NonPvpServerKeywordPage, { generateMetadata } from './luminera-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13NonPvpServerKeywordPage />;
}
