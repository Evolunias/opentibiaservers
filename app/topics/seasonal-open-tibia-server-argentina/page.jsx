import SeasonalOpenTibiaServerArgentinaKeywordPage, { generateMetadata } from './seasonal-open-tibia-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOpenTibiaServerArgentinaKeywordPage />;
}
