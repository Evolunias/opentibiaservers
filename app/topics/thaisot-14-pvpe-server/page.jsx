import Thaisot14PvpeServerKeywordPage, { generateMetadata } from './thaisot-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14PvpeServerKeywordPage />;
}
