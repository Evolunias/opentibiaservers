import HarmoniaOtNorthAmericaServerKeywordPage, { generateMetadata } from './harmonia-ot-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtNorthAmericaServerKeywordPage />;
}
