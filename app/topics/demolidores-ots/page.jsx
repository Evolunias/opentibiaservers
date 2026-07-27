import DemolidoresOtsKeywordPage, { generateMetadata } from './demolidores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresOtsKeywordPage />;
}
