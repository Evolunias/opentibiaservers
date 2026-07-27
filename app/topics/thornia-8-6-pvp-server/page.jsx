import Thornia86PvpServerKeywordPage, { generateMetadata } from './thornia-8-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86PvpServerKeywordPage />;
}
