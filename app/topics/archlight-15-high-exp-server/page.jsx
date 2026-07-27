import Archlight15HighExpServerKeywordPage, { generateMetadata } from './archlight-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15HighExpServerKeywordPage />;
}
