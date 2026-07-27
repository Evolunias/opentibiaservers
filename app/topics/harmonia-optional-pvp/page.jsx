import HarmoniaOptionalPvpKeywordPage, { generateMetadata } from './harmonia-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOptionalPvpKeywordPage />;
}
