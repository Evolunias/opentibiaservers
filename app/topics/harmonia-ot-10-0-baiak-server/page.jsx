import HarmoniaOt100BaiakServerKeywordPage, { generateMetadata } from './harmonia-ot-10-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt100BaiakServerKeywordPage />;
}
