import TopAlasteraOtServerKeywordPage, { generateMetadata } from './top-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraOtServerKeywordPage />;
}
