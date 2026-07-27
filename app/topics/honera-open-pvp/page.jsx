import HoneraOpenPvpKeywordPage, { generateMetadata } from './honera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraOpenPvpKeywordPage />;
}
