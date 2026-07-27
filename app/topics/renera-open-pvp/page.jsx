import ReneraOpenPvpKeywordPage, { generateMetadata } from './renera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraOpenPvpKeywordPage />;
}
