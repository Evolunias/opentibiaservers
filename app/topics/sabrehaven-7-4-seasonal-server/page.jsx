import Sabrehaven74SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven74SeasonalServerKeywordPage />;
}
