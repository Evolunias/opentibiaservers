import DemolidoresBrazilServerKeywordPage, { generateMetadata } from './demolidores-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresBrazilServerKeywordPage />;
}
