import Unline12PvpServerKeywordPage, { generateMetadata } from './unline-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12PvpServerKeywordPage />;
}
