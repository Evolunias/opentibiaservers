import RealMapDuraOnlineServerKeywordPage, { generateMetadata } from './real-map-dura-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDuraOnlineServerKeywordPage />;
}
