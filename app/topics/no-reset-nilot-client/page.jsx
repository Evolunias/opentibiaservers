import NoResetNilotClientKeywordPage, { generateMetadata } from './no-reset-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotClientKeywordPage />;
}
