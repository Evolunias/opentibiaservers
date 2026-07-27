import Unline15SeasonalServerKeywordPage, { generateMetadata } from './unline-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline15SeasonalServerKeywordPage />;
}
