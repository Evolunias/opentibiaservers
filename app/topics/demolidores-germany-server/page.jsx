import DemolidoresGermanyServerKeywordPage, { generateMetadata } from './demolidores-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresGermanyServerKeywordPage />;
}
