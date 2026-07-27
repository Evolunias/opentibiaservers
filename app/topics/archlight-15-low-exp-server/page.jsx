import Archlight15LowExpServerKeywordPage, { generateMetadata } from './archlight-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15LowExpServerKeywordPage />;
}
