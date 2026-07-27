import Imperianic15PvpServerKeywordPage, { generateMetadata } from './imperianic-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic15PvpServerKeywordPage />;
}
