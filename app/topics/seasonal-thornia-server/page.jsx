import SeasonalThorniaServerKeywordPage, { generateMetadata } from './seasonal-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalThorniaServerKeywordPage />;
}
