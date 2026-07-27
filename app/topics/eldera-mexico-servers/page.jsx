import ElderaMexicoServersKeywordPage, { generateMetadata } from './eldera-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaMexicoServersKeywordPage />;
}
