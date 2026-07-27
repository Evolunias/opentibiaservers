import TopAlasteraClientKeywordPage, { generateMetadata } from './top-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraClientKeywordPage />;
}
