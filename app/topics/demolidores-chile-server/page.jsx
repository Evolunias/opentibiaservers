import DemolidoresChileServerKeywordPage, { generateMetadata } from './demolidores-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresChileServerKeywordPage />;
}
