import Oxygenot12SeasonalServerKeywordPage, { generateMetadata } from './oxygenot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot12SeasonalServerKeywordPage />;
}
