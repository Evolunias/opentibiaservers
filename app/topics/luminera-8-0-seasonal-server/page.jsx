import Luminera80SeasonalServerKeywordPage, { generateMetadata } from './luminera-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80SeasonalServerKeywordPage />;
}
