import HarmoniaOtWarsKeywordPage, { generateMetadata } from './harmonia-ot-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtWarsKeywordPage />;
}
