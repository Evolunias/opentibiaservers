import NoxiousotBrazilServersKeywordPage, { generateMetadata } from './noxiousot-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotBrazilServersKeywordPage />;
}
