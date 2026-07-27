import Thaisot1098SeasonalServerKeywordPage, { generateMetadata } from './thaisot-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot1098SeasonalServerKeywordPage />;
}
