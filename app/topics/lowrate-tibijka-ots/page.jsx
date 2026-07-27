import LowrateTibijkaOtsKeywordPage, { generateMetadata } from './lowrate-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaOtsKeywordPage />;
}
