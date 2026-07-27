import Unline11SeasonalServerKeywordPage, { generateMetadata } from './unline-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline11SeasonalServerKeywordPage />;
}
