import SeasonalServersMexicoKeywordPage, { generateMetadata } from './seasonal-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersMexicoKeywordPage />;
}
