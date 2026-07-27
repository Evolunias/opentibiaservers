import CustomMapServerBrazilKeywordPage, { generateMetadata } from './custom-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerBrazilKeywordPage />;
}
