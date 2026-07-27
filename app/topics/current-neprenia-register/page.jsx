import CurrentNepreniaRegisterKeywordPage, { generateMetadata } from './current-neprenia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaRegisterKeywordPage />;
}
