import CalmeraOpenPvpKeywordPage, { generateMetadata } from './calmera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOpenPvpKeywordPage />;
}
