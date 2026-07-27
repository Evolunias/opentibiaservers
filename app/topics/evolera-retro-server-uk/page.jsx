import EvoleraRetroServerUkKeywordPage, { generateMetadata } from './evolera-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraRetroServerUkKeywordPage />;
}
