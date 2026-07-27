import ThorniaClientKeywordPage, { generateMetadata } from './thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaClientKeywordPage />;
}
