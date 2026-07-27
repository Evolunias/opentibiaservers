import TibijkaFunServerKeywordPage, { generateMetadata } from './tibijka-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaFunServerKeywordPage />;
}
