import CustomMapNtoStarServersKeywordPage, { generateMetadata } from './custom-map-nto-star-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapNtoStarServersKeywordPage />;
}
