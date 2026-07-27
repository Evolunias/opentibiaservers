import HighrateArchlightOtKeywordPage, { generateMetadata } from './highrate-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightOtKeywordPage />;
}
