import CustomMapServerListArgentinaKeywordPage, { generateMetadata } from './custom-map-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListArgentinaKeywordPage />;
}
