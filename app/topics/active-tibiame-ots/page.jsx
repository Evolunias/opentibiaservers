import ActiveTibiameOtsKeywordPage, { generateMetadata } from './active-tibiame-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameOtsKeywordPage />;
}
