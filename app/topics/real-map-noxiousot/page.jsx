import RealMapNoxiousotKeywordPage, { generateMetadata } from './real-map-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNoxiousotKeywordPage />;
}
