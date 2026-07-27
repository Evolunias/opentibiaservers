import NoResetTibiameClientKeywordPage, { generateMetadata } from './no-reset-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiameClientKeywordPage />;
}
