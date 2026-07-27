import DemolidoresCanadaServerKeywordPage, { generateMetadata } from './demolidores-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresCanadaServerKeywordPage />;
}
