import DemolidoresBrazilServersKeywordPage, { generateMetadata } from './demolidores-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresBrazilServersKeywordPage />;
}
