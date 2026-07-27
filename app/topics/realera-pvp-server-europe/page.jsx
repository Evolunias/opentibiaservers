import RealeraPvpServerEuropeKeywordPage, { generateMetadata } from './realera-pvp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraPvpServerEuropeKeywordPage />;
}
