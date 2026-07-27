import SeasonalXanteriaServerKeywordPage, { generateMetadata } from './seasonal-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalXanteriaServerKeywordPage />;
}
