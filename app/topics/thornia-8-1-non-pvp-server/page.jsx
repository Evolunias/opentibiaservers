import Thornia81NonPvpServerKeywordPage, { generateMetadata } from './thornia-8-1-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81NonPvpServerKeywordPage />;
}
