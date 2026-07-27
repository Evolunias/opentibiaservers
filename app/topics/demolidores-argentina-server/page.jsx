import DemolidoresArgentinaServerKeywordPage, { generateMetadata } from './demolidores-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresArgentinaServerKeywordPage />;
}
