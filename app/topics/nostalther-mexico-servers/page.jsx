import NostaltherMexicoServersKeywordPage, { generateMetadata } from './nostalther-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherMexicoServersKeywordPage />;
}
