import HighrateArchlightOtServerKeywordPage, { generateMetadata } from './highrate-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightOtServerKeywordPage />;
}
