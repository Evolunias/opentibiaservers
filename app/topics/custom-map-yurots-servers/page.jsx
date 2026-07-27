import CustomMapYurotsServersKeywordPage, { generateMetadata } from './custom-map-yurots-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapYurotsServersKeywordPage />;
}
