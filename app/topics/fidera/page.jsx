import FideraKeywordPage, { generateMetadata } from './fidera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraKeywordPage />;
}
