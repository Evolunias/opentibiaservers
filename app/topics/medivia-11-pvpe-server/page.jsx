import Medivia11PvpeServerKeywordPage, { generateMetadata } from './medivia-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11PvpeServerKeywordPage />;
}
