import DemolidoresLoginKeywordPage, { generateMetadata } from './demolidores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresLoginKeywordPage />;
}
