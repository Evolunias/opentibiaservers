import SeasonalServerArgentinaKeywordPage, { generateMetadata } from './seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServerArgentinaKeywordPage />;
}
