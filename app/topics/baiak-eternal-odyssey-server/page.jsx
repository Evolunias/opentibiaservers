import BaiakEternalOdysseyServerKeywordPage, { generateMetadata } from './baiak-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakEternalOdysseyServerKeywordPage />;
}
