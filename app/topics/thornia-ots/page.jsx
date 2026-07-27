import ThorniaOtsKeywordPage, { generateMetadata } from './thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaOtsKeywordPage />;
}
