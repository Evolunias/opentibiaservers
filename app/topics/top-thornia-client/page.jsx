import TopThorniaClientKeywordPage, { generateMetadata } from './top-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaClientKeywordPage />;
}
