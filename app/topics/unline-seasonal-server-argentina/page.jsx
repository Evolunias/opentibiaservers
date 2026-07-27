import UnlineSeasonalServerArgentinaKeywordPage, { generateMetadata } from './unline-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineSeasonalServerArgentinaKeywordPage />;
}
