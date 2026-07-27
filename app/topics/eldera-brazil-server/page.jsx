import ElderaBrazilServerKeywordPage, { generateMetadata } from './eldera-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaBrazilServerKeywordPage />;
}
