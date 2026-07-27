import NoResetNilotOtsKeywordPage, { generateMetadata } from './no-reset-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotOtsKeywordPage />;
}
