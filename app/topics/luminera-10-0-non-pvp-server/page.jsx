import Luminera100NonPvpServerKeywordPage, { generateMetadata } from './luminera-10-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100NonPvpServerKeywordPage />;
}
