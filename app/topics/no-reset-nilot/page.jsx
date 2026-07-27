import NoResetNilotKeywordPage, { generateMetadata } from './no-reset-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotKeywordPage />;
}
