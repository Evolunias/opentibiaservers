import SeasonalServersBrazilKeywordPage, { generateMetadata } from './seasonal-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersBrazilKeywordPage />;
}
