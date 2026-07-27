import ThorniaCanadaServerKeywordPage, { generateMetadata } from './thornia-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaCanadaServerKeywordPage />;
}
