import DemolidoresEuropeServersKeywordPage, { generateMetadata } from './demolidores-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresEuropeServersKeywordPage />;
}
