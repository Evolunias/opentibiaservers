import DuraOnline12RetroServerKeywordPage, { generateMetadata } from './dura-online-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline12RetroServerKeywordPage />;
}
