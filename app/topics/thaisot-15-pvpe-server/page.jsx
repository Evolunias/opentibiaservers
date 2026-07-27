import Thaisot15PvpeServerKeywordPage, { generateMetadata } from './thaisot-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15PvpeServerKeywordPage />;
}
