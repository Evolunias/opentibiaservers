import CustomMapClassicusServerKeywordPage, { generateMetadata } from './custom-map-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClassicusServerKeywordPage />;
}
