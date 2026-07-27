import Oxygenot13SeasonalServerKeywordPage, { generateMetadata } from './oxygenot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot13SeasonalServerKeywordPage />;
}
