import NoResetImperianicServerKeywordPage, { generateMetadata } from './no-reset-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetImperianicServerKeywordPage />;
}
