import Luminera74SeasonalServerKeywordPage, { generateMetadata } from './luminera-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74SeasonalServerKeywordPage />;
}
