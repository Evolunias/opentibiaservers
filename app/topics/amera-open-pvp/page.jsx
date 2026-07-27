import AmeraOpenPvpKeywordPage, { generateMetadata } from './amera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeraOpenPvpKeywordPage />;
}
