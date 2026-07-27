import NoResetNilotLoginKeywordPage, { generateMetadata } from './no-reset-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotLoginKeywordPage />;
}
