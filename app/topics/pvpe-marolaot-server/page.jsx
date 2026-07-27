import PvpeMarolaotServerKeywordPage, { generateMetadata } from './pvpe-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeMarolaotServerKeywordPage />;
}
