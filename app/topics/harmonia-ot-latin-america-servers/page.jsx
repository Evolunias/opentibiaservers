import HarmoniaOtLatinAmericaServersKeywordPage, { generateMetadata } from './harmonia-ot-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtLatinAmericaServersKeywordPage />;
}
