import Unline12NonPvpServerKeywordPage, { generateMetadata } from './unline-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12NonPvpServerKeywordPage />;
}
