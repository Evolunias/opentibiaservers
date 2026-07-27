import Midhem15SeasonalServerKeywordPage, { generateMetadata } from './midhem-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15SeasonalServerKeywordPage />;
}
