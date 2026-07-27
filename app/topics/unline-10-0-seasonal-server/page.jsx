import Unline100SeasonalServerKeywordPage, { generateMetadata } from './unline-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline100SeasonalServerKeywordPage />;
}
