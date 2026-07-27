import Archlight11FreshStartServerKeywordPage, { generateMetadata } from './archlight-11-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11FreshStartServerKeywordPage />;
}
