import MarolaotRegisterKeywordPage, { generateMetadata } from './marolaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotRegisterKeywordPage />;
}
