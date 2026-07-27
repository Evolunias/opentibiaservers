import Unline96SeasonalServerKeywordPage, { generateMetadata } from './unline-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline96SeasonalServerKeywordPage />;
}
