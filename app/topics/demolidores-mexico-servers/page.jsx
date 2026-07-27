import DemolidoresMexicoServersKeywordPage, { generateMetadata } from './demolidores-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresMexicoServersKeywordPage />;
}
