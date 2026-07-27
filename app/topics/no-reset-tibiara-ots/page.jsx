import NoResetTibiaraOtsKeywordPage, { generateMetadata } from './no-reset-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraOtsKeywordPage />;
}
