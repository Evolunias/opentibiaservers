import AureraGlobalFranceServersKeywordPage, { generateMetadata } from './aurera-global-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalFranceServersKeywordPage />;
}
