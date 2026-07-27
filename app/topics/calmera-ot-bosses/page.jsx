import CalmeraOtBossesKeywordPage, { generateMetadata } from './calmera-ot-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtBossesKeywordPage />;
}
