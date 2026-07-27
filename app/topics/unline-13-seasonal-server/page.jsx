import Unline13SeasonalServerKeywordPage, { generateMetadata } from './unline-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13SeasonalServerKeywordPage />;
}
