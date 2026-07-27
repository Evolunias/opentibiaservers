import Unline14SeasonalServerKeywordPage, { generateMetadata } from './unline-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline14SeasonalServerKeywordPage />;
}
