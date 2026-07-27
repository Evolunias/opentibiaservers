import Oxygenot15SeasonalServerKeywordPage, { generateMetadata } from './oxygenot-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot15SeasonalServerKeywordPage />;
}
