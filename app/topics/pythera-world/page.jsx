import PytheraWorldKeywordPage, { generateMetadata } from './pythera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraWorldKeywordPage />;
}
