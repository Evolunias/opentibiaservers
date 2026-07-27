import VineraOpenPvpKeywordPage, { generateMetadata } from './vinera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraOpenPvpKeywordPage />;
}
