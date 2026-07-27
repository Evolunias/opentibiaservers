import HarmoniaOtUsaServerKeywordPage, { generateMetadata } from './harmonia-ot-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtUsaServerKeywordPage />;
}
