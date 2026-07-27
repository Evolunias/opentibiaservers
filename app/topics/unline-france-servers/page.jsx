import UnlineFranceServersKeywordPage, { generateMetadata } from './unline-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineFranceServersKeywordPage />;
}
