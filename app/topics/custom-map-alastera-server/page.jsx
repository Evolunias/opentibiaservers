import CustomMapAlasteraServerKeywordPage, { generateMetadata } from './custom-map-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapAlasteraServerKeywordPage />;
}
