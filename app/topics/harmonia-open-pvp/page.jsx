import HarmoniaOpenPvpKeywordPage, { generateMetadata } from './harmonia-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOpenPvpKeywordPage />;
}
