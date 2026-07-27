import DemolidoresLatinAmericaServerKeywordPage, { generateMetadata } from './demolidores-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresLatinAmericaServerKeywordPage />;
}
