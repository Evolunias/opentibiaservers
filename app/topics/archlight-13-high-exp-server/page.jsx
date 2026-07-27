import Archlight13HighExpServerKeywordPage, { generateMetadata } from './archlight-13-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13HighExpServerKeywordPage />;
}
