import ActiveTibiameServerKeywordPage, { generateMetadata } from './active-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameServerKeywordPage />;
}
