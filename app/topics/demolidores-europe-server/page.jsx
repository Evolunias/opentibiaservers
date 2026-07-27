import DemolidoresEuropeServerKeywordPage, { generateMetadata } from './demolidores-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresEuropeServerKeywordPage />;
}
