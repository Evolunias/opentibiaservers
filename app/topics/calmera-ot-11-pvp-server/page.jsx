import CalmeraOt11PvpServerKeywordPage, { generateMetadata } from './calmera-ot-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt11PvpServerKeywordPage />;
}
