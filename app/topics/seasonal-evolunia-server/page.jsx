import SeasonalEvoluniaServerKeywordPage, { generateMetadata } from './seasonal-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalEvoluniaServerKeywordPage />;
}
