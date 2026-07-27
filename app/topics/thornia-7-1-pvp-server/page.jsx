import Thornia71PvpServerKeywordPage, { generateMetadata } from './thornia-7-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71PvpServerKeywordPage />;
}
