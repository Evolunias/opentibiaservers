import NewDemolidoresClientKeywordPage, { generateMetadata } from './new-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresClientKeywordPage />;
}
