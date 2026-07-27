import NoResetNilotServerKeywordPage, { generateMetadata } from './no-reset-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotServerKeywordPage />;
}
