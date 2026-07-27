import OtServersPvpKeywordPage, { generateMetadata } from './ot-servers-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersPvpKeywordPage />;
}
