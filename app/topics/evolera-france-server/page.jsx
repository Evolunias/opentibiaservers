import EvoleraFranceServerKeywordPage, { generateMetadata } from './evolera-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraFranceServerKeywordPage />;
}
