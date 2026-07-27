import Thornia84PvpServerKeywordPage, { generateMetadata } from './thornia-8-4-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84PvpServerKeywordPage />;
}
