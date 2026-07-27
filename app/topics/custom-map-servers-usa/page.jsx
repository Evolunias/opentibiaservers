import CustomMapServersUsaKeywordPage, { generateMetadata } from './custom-map-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServersUsaKeywordPage />;
}
