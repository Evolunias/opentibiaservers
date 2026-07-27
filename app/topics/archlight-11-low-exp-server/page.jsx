import Archlight11LowExpServerKeywordPage, { generateMetadata } from './archlight-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11LowExpServerKeywordPage />;
}
