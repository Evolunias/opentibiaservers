import Thornia11PvpServerKeywordPage, { generateMetadata } from './thornia-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11PvpServerKeywordPage />;
}
