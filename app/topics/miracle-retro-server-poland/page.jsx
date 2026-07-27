import MiracleRetroServerPolandKeywordPage, { generateMetadata } from './miracle-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleRetroServerPolandKeywordPage />;
}
