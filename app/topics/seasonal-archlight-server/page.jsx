import SeasonalArchlightServerKeywordPage, { generateMetadata } from './seasonal-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalArchlightServerKeywordPage />;
}
