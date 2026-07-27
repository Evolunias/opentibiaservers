import RealestaBrazilServerKeywordPage, { generateMetadata } from './realesta-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaBrazilServerKeywordPage />;
}
