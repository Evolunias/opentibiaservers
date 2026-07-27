import Unline12SeasonalServerKeywordPage, { generateMetadata } from './unline-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12SeasonalServerKeywordPage />;
}
