import SeasonalAlasteraServerKeywordPage, { generateMetadata } from './seasonal-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalAlasteraServerKeywordPage />;
}
