import ActiveAmeriaOtsKeywordPage, { generateMetadata } from './active-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaOtsKeywordPage />;
}
