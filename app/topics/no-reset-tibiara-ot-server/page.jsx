import NoResetTibiaraOtServerKeywordPage, { generateMetadata } from './no-reset-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraOtServerKeywordPage />;
}
