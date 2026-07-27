import RealestaBrazilServersKeywordPage, { generateMetadata } from './realesta-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaBrazilServersKeywordPage />;
}
