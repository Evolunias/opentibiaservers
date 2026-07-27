import IsaraOpenPvpKeywordPage, { generateMetadata } from './isara-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaraOpenPvpKeywordPage />;
}
