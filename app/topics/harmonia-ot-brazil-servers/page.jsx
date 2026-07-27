import HarmoniaOtBrazilServersKeywordPage, { generateMetadata } from './harmonia-ot-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtBrazilServersKeywordPage />;
}
