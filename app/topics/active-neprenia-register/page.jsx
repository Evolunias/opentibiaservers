import ActiveNepreniaRegisterKeywordPage, { generateMetadata } from './active-neprenia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaRegisterKeywordPage />;
}
