import Classicus15SeasonalServerKeywordPage, { generateMetadata } from './classicus-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15SeasonalServerKeywordPage />;
}
