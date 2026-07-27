import ActiveTibiameOtKeywordPage, { generateMetadata } from './active-tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameOtKeywordPage />;
}
