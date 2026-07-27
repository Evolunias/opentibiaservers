import FideraServerKeywordPage, { generateMetadata } from './fidera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraServerKeywordPage />;
}
