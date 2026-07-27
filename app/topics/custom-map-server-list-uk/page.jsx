import CustomMapServerListUkKeywordPage, { generateMetadata } from './custom-map-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListUkKeywordPage />;
}
