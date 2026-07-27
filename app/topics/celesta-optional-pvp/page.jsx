import CelestaOptionalPvpKeywordPage, { generateMetadata } from './celesta-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaOptionalPvpKeywordPage />;
}
