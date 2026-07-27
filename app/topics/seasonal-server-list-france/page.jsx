import SeasonalServerListFranceKeywordPage, { generateMetadata } from './seasonal-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServerListFranceKeywordPage />;
}
