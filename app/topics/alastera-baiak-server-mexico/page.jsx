import AlasteraBaiakServerMexicoKeywordPage, { generateMetadata } from './alastera-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraBaiakServerMexicoKeywordPage />;
}
