import DemolidoresMapKeywordPage, { generateMetadata } from './demolidores-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresMapKeywordPage />;
}
