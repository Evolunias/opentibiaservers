import NewDemolidoresKeywordPage, { generateMetadata } from './new-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresKeywordPage />;
}
