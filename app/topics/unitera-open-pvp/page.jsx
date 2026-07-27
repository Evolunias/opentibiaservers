import UniteraOpenPvpKeywordPage, { generateMetadata } from './unitera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UniteraOpenPvpKeywordPage />;
}
