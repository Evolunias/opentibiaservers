import OceraOpenPvpKeywordPage, { generateMetadata } from './ocera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraOpenPvpKeywordPage />;
}
