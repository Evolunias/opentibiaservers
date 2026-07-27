import FideraWorldKeywordPage, { generateMetadata } from './fidera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraWorldKeywordPage />;
}
