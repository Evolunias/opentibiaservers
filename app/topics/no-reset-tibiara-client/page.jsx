import NoResetTibiaraClientKeywordPage, { generateMetadata } from './no-reset-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraClientKeywordPage />;
}
