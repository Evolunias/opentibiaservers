import DuraOnline12SeasonalServerKeywordPage, { generateMetadata } from './dura-online-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline12SeasonalServerKeywordPage />;
}
