import HarmoniaServerKeywordPage, { generateMetadata } from './harmonia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaServerKeywordPage />;
}
