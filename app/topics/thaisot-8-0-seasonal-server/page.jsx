import Thaisot80SeasonalServerKeywordPage, { generateMetadata } from './thaisot-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot80SeasonalServerKeywordPage />;
}
