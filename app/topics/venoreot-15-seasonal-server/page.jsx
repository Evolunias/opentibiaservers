import Venoreot15SeasonalServerKeywordPage, { generateMetadata } from './venoreot-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15SeasonalServerKeywordPage />;
}
