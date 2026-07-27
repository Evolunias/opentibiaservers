import DemolidoresPolandServersKeywordPage, { generateMetadata } from './demolidores-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresPolandServersKeywordPage />;
}
