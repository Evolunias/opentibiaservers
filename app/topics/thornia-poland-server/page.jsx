import ThorniaPolandServerKeywordPage, { generateMetadata } from './thornia-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaPolandServerKeywordPage />;
}
