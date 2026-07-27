import DemolidoresPolandServerKeywordPage, { generateMetadata } from './demolidores-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresPolandServerKeywordPage />;
}
