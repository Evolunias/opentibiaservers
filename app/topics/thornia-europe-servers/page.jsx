import ThorniaEuropeServersKeywordPage, { generateMetadata } from './thornia-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaEuropeServersKeywordPage />;
}
