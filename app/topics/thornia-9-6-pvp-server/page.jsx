import Thornia96PvpServerKeywordPage, { generateMetadata } from './thornia-9-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96PvpServerKeywordPage />;
}
