import NoxiousotBrazilServerKeywordPage, { generateMetadata } from './noxiousot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotBrazilServerKeywordPage />;
}
