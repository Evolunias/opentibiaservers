import LowExpMarolaotServerKeywordPage, { generateMetadata } from './low-exp-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpMarolaotServerKeywordPage />;
}
