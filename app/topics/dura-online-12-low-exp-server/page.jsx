import DuraOnline12LowExpServerKeywordPage, { generateMetadata } from './dura-online-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline12LowExpServerKeywordPage />;
}
