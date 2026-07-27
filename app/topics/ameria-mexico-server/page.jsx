import AmeriaMexicoServerKeywordPage, { generateMetadata } from './ameria-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaMexicoServerKeywordPage />;
}
