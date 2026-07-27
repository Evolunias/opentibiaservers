import CustomMapMidhemServersKeywordPage, { generateMetadata } from './custom-map-midhem-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapMidhemServersKeywordPage />;
}
