import NoResetTibiascapeKeywordPage, { generateMetadata } from './no-reset-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiascapeKeywordPage />;
}
