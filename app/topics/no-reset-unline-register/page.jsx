import NoResetUnlineRegisterKeywordPage, { generateMetadata } from './no-reset-unline-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineRegisterKeywordPage />;
}
