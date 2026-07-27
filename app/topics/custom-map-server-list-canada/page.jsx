import CustomMapServerListCanadaKeywordPage, { generateMetadata } from './custom-map-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListCanadaKeywordPage />;
}
