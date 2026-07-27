import CurrentMarolaotRegisterKeywordPage, { generateMetadata } from './current-marolaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMarolaotRegisterKeywordPage />;
}
