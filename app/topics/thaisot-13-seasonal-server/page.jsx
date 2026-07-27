import Thaisot13SeasonalServerKeywordPage, { generateMetadata } from './thaisot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13SeasonalServerKeywordPage />;
}
