import NoxiousotMexicoServersKeywordPage, { generateMetadata } from './noxiousot-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotMexicoServersKeywordPage />;
}
