import NoxiousotMexicoServerKeywordPage, { generateMetadata } from './noxiousot-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotMexicoServerKeywordPage />;
}
