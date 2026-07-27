import NoResetNilotOtKeywordPage, { generateMetadata } from './no-reset-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotOtKeywordPage />;
}
