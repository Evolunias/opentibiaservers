import AlasteraMexicoServersKeywordPage, { generateMetadata } from './alastera-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraMexicoServersKeywordPage />;
}
