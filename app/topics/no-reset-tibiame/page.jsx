import NoResetTibiameKeywordPage, { generateMetadata } from './no-reset-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiameKeywordPage />;
}
