import ElderaMexicoServerKeywordPage, { generateMetadata } from './eldera-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaMexicoServerKeywordPage />;
}
