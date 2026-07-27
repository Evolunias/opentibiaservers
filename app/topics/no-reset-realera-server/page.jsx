import NoResetRealeraServerKeywordPage, { generateMetadata } from './no-reset-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealeraServerKeywordPage />;
}
