import NoResetClassicusRegisterKeywordPage, { generateMetadata } from './no-reset-classicus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusRegisterKeywordPage />;
}
