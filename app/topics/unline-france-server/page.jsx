import UnlineFranceServerKeywordPage, { generateMetadata } from './unline-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineFranceServerKeywordPage />;
}
