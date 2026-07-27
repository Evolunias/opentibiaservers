import Thornia14NonPvpServerKeywordPage, { generateMetadata } from './thornia-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14NonPvpServerKeywordPage />;
}
