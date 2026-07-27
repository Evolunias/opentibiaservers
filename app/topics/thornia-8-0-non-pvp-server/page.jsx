import Thornia80NonPvpServerKeywordPage, { generateMetadata } from './thornia-8-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80NonPvpServerKeywordPage />;
}
