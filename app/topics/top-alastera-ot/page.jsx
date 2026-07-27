import TopAlasteraOtKeywordPage, { generateMetadata } from './top-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraOtKeywordPage />;
}
