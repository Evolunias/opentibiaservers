import Sabrehaven84SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven84SeasonalServerKeywordPage />;
}
