import CustomMapArcaniarlServerKeywordPage, { generateMetadata } from './custom-map-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapArcaniarlServerKeywordPage />;
}
