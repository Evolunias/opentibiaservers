import NoResetNepreniaRegisterKeywordPage, { generateMetadata } from './no-reset-neprenia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaRegisterKeywordPage />;
}
