import Archlight12HighExpServerKeywordPage, { generateMetadata } from './archlight-12-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12HighExpServerKeywordPage />;
}
