import SeasonalSaintsotServerKeywordPage, { generateMetadata } from './seasonal-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSaintsotServerKeywordPage />;
}
