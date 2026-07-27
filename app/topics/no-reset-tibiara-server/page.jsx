import NoResetTibiaraServerKeywordPage, { generateMetadata } from './no-reset-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraServerKeywordPage />;
}
