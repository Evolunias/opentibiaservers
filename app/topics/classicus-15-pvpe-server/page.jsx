import Classicus15PvpeServerKeywordPage, { generateMetadata } from './classicus-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15PvpeServerKeywordPage />;
}
