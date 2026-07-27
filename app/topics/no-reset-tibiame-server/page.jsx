import NoResetTibiameServerKeywordPage, { generateMetadata } from './no-reset-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiameServerKeywordPage />;
}
