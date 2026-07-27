import LowrateTibijkaClientKeywordPage, { generateMetadata } from './lowrate-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaClientKeywordPage />;
}
