import Venoreot13SeasonalServerKeywordPage, { generateMetadata } from './venoreot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13SeasonalServerKeywordPage />;
}
