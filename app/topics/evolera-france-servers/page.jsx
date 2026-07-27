import EvoleraFranceServersKeywordPage, { generateMetadata } from './evolera-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraFranceServersKeywordPage />;
}
