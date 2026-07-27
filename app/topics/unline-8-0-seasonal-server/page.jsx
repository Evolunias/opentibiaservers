import Unline80SeasonalServerKeywordPage, { generateMetadata } from './unline-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline80SeasonalServerKeywordPage />;
}
