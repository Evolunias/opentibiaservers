import ThorniaCanadaServersKeywordPage, { generateMetadata } from './thornia-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaCanadaServersKeywordPage />;
}
