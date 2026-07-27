import NoResetTibiantisLoginKeywordPage, { generateMetadata } from './no-reset-tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiantisLoginKeywordPage />;
}
