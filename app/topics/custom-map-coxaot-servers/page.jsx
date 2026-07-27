import CustomMapCoxaotServersKeywordPage, { generateMetadata } from './custom-map-coxaot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapCoxaotServersKeywordPage />;
}
