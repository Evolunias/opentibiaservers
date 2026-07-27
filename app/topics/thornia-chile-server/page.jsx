import ThorniaChileServerKeywordPage, { generateMetadata } from './thornia-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaChileServerKeywordPage />;
}
