import NoResetTibiascapeLoginKeywordPage, { generateMetadata } from './no-reset-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiascapeLoginKeywordPage />;
}
