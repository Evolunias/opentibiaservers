import Archlight80LowExpServerKeywordPage, { generateMetadata } from './archlight-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight80LowExpServerKeywordPage />;
}
