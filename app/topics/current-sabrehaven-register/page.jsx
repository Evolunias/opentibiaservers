import CurrentSabrehavenRegisterKeywordPage, { generateMetadata } from './current-sabrehaven-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenRegisterKeywordPage />;
}
