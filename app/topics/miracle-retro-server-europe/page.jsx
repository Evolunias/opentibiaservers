import MiracleRetroServerEuropeKeywordPage, { generateMetadata } from './miracle-retro-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleRetroServerEuropeKeywordPage />;
}
