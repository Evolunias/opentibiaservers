import CustomMapServerListBrazilKeywordPage, { generateMetadata } from './custom-map-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListBrazilKeywordPage />;
}
