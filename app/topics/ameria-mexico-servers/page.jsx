import AmeriaMexicoServersKeywordPage, { generateMetadata } from './ameria-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaMexicoServersKeywordPage />;
}
