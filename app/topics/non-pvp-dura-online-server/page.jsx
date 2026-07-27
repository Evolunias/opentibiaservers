import NonPvpDuraOnlineServerKeywordPage, { generateMetadata } from './non-pvp-dura-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDuraOnlineServerKeywordPage />;
}
