import CustomMapMidhemServerKeywordPage, { generateMetadata } from './custom-map-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapMidhemServerKeywordPage />;
}
