import CustomDemolidoresOtsKeywordPage, { generateMetadata } from './custom-demolidores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresOtsKeywordPage />;
}
