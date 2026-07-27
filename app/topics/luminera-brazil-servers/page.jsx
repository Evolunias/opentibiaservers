import LumineraBrazilServersKeywordPage, { generateMetadata } from './luminera-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraBrazilServersKeywordPage />;
}
