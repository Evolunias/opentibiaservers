import TopAlasteraKeywordPage, { generateMetadata } from './top-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraKeywordPage />;
}
