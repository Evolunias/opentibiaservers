import HarmoniaOtLatinAmericaServerKeywordPage, { generateMetadata } from './harmonia-ot-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtLatinAmericaServerKeywordPage />;
}
