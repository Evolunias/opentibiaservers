import CustomMapRuthlessChaosServersKeywordPage, { generateMetadata } from './custom-map-ruthless-chaos-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRuthlessChaosServersKeywordPage />;
}
