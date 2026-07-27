import HarmoniaOtGermanyServersKeywordPage, { generateMetadata } from './harmonia-ot-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtGermanyServersKeywordPage />;
}
