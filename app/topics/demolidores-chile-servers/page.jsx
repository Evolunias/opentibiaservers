import DemolidoresChileServersKeywordPage, { generateMetadata } from './demolidores-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresChileServersKeywordPage />;
}
