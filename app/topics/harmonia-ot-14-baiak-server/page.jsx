import HarmoniaOt14BaiakServerKeywordPage, { generateMetadata } from './harmonia-ot-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14BaiakServerKeywordPage />;
}
