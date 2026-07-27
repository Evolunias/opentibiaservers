import ThorniaMapKeywordPage, { generateMetadata } from './thornia-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaMapKeywordPage />;
}
