import PvpeSaintsotServerKeywordPage, { generateMetadata } from './pvpe-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeSaintsotServerKeywordPage />;
}
