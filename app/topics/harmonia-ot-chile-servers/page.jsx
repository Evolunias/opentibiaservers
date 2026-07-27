import HarmoniaOtChileServersKeywordPage, { generateMetadata } from './harmonia-ot-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtChileServersKeywordPage />;
}
