import Thornia14PvpServerKeywordPage, { generateMetadata } from './thornia-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14PvpServerKeywordPage />;
}
