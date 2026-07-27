import NoResetThaisotRegisterKeywordPage, { generateMetadata } from './no-reset-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotRegisterKeywordPage />;
}
