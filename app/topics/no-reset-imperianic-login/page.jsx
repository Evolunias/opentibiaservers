import NoResetImperianicLoginKeywordPage, { generateMetadata } from './no-reset-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetImperianicLoginKeywordPage />;
}
