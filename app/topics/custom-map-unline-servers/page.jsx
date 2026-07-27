import CustomMapUnlineServersKeywordPage, { generateMetadata } from './custom-map-unline-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapUnlineServersKeywordPage />;
}
