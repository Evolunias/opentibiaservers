import NoResetTibiaraKeywordPage, { generateMetadata } from './no-reset-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraKeywordPage />;
}
