import HarmoniaOt11BaiakServerKeywordPage, { generateMetadata } from './harmonia-ot-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11BaiakServerKeywordPage />;
}
