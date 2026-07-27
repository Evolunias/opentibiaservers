import Archlight13LowExpServerKeywordPage, { generateMetadata } from './archlight-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13LowExpServerKeywordPage />;
}
