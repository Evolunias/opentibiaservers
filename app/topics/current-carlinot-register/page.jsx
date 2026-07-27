import CurrentCarlinotRegisterKeywordPage, { generateMetadata } from './current-carlinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotRegisterKeywordPage />;
}
