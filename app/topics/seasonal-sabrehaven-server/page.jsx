import SeasonalSabrehavenServerKeywordPage, { generateMetadata } from './seasonal-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSabrehavenServerKeywordPage />;
}
