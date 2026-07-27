import DuraOnline12EvoServerKeywordPage, { generateMetadata } from './dura-online-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline12EvoServerKeywordPage />;
}
