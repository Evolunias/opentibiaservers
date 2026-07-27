import PvpeDuraOnlineServerKeywordPage, { generateMetadata } from './pvpe-dura-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDuraOnlineServerKeywordPage />;
}
