import ActiveTibiameLoginKeywordPage, { generateMetadata } from './active-tibiame-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameLoginKeywordPage />;
}
