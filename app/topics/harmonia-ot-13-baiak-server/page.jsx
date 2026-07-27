import HarmoniaOt13BaiakServerKeywordPage, { generateMetadata } from './harmonia-ot-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13BaiakServerKeywordPage />;
}
