import HarmoniaOtPolandServerKeywordPage, { generateMetadata } from './harmonia-ot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtPolandServerKeywordPage />;
}
