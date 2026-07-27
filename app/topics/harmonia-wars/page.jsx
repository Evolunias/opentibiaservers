import HarmoniaWarsKeywordPage, { generateMetadata } from './harmonia-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaWarsKeywordPage />;
}
