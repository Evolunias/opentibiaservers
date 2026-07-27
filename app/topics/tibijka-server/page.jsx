import TibijkaServerKeywordPage, { generateMetadata } from './tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaServerKeywordPage />;
}
