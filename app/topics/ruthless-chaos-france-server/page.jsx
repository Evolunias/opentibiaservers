import RuthlessChaosFranceServerKeywordPage, { generateMetadata } from './ruthless-chaos-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosFranceServerKeywordPage />;
}
