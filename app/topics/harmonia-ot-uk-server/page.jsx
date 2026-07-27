import HarmoniaOtUkServerKeywordPage, { generateMetadata } from './harmonia-ot-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtUkServerKeywordPage />;
}
