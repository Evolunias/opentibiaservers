import PaceraOpenPvpKeywordPage, { generateMetadata } from './pacera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraOpenPvpKeywordPage />;
}
