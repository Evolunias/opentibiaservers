import DemolidoresCanadaServersKeywordPage, { generateMetadata } from './demolidores-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresCanadaServersKeywordPage />;
}
