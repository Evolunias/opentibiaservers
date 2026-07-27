import CustomMapEvoluniaServersKeywordPage, { generateMetadata } from './custom-map-evolunia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapEvoluniaServersKeywordPage />;
}
