import OriginaltibiaBrazilServerKeywordPage, { generateMetadata } from './originaltibia-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaBrazilServerKeywordPage />;
}
