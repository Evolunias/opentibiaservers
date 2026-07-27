import DemolidoresSouthAmericaServerKeywordPage, { generateMetadata } from './demolidores-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresSouthAmericaServerKeywordPage />;
}
