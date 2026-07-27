import ThorniaChileServersKeywordPage, { generateMetadata } from './thornia-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaChileServersKeywordPage />;
}
