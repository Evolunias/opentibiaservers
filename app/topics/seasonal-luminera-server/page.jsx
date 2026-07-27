import SeasonalLumineraServerKeywordPage, { generateMetadata } from './seasonal-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalLumineraServerKeywordPage />;
}
