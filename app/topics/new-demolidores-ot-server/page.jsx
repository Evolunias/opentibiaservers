import NewDemolidoresOtServerKeywordPage, { generateMetadata } from './new-demolidores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresOtServerKeywordPage />;
}
