import UnlineSeasonalServerBrazilKeywordPage, { generateMetadata } from './unline-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineSeasonalServerBrazilKeywordPage />;
}
