import CustomMapEvoluniaServerKeywordPage, { generateMetadata } from './custom-map-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapEvoluniaServerKeywordPage />;
}
