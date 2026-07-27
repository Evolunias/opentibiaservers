import Thaisot11PvpeServerKeywordPage, { generateMetadata } from './thaisot-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11PvpeServerKeywordPage />;
}
