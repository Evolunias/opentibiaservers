import CustomMapArcaniarlServersKeywordPage, { generateMetadata } from './custom-map-arcaniarl-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapArcaniarlServersKeywordPage />;
}
