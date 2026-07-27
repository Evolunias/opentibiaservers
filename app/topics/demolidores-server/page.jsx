import DemolidoresServerKeywordPage, { generateMetadata } from './demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresServerKeywordPage />;
}
