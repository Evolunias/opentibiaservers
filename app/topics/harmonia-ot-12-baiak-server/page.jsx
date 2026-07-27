import HarmoniaOt12BaiakServerKeywordPage, { generateMetadata } from './harmonia-ot-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12BaiakServerKeywordPage />;
}
