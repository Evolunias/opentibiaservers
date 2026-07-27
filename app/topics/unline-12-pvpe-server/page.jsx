import Unline12PvpeServerKeywordPage, { generateMetadata } from './unline-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12PvpeServerKeywordPage />;
}
