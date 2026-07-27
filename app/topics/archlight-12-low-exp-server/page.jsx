import Archlight12LowExpServerKeywordPage, { generateMetadata } from './archlight-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12LowExpServerKeywordPage />;
}
