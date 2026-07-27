import Rubinot11PvpServerKeywordPage, { generateMetadata } from './rubinot-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11PvpServerKeywordPage />;
}
