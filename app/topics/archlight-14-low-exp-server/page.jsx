import Archlight14LowExpServerKeywordPage, { generateMetadata } from './archlight-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14LowExpServerKeywordPage />;
}
