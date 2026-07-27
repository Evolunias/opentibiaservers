import NoResetTibiameLoginKeywordPage, { generateMetadata } from './no-reset-tibiame-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiameLoginKeywordPage />;
}
