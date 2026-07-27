import NoResetTibijkaRegisterKeywordPage, { generateMetadata } from './no-reset-tibijka-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaRegisterKeywordPage />;
}
