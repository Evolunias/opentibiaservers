import ForteraWorldKeywordPage, { generateMetadata } from './fortera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraWorldKeywordPage />;
}
