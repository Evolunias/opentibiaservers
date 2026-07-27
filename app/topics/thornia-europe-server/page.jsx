import ThorniaEuropeServerKeywordPage, { generateMetadata } from './thornia-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaEuropeServerKeywordPage />;
}
