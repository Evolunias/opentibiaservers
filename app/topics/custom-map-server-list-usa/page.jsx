import CustomMapServerListUsaKeywordPage, { generateMetadata } from './custom-map-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListUsaKeywordPage />;
}
