import DemolidoresUsaServersKeywordPage, { generateMetadata } from './demolidores-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresUsaServersKeywordPage />;
}
