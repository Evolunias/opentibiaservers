import NoResetCanobRegisterKeywordPage, { generateMetadata } from './no-reset-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobRegisterKeywordPage />;
}
