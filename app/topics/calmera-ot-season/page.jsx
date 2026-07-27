import CalmeraOtSeasonKeywordPage, { generateMetadata } from './calmera-ot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtSeasonKeywordPage />;
}
