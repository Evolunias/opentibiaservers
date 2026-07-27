import PvpeNoxiousotServerKeywordPage, { generateMetadata } from './pvpe-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeNoxiousotServerKeywordPage />;
}
