import ActiveMarolaotRegisterKeywordPage, { generateMetadata } from './active-marolaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMarolaotRegisterKeywordPage />;
}
