import RealeraRetroServerArgentinaKeywordPage, { generateMetadata } from './realera-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraRetroServerArgentinaKeywordPage />;
}
