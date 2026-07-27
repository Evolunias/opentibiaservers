import TibijkaUsaServerKeywordPage, { generateMetadata } from './tibijka-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaUsaServerKeywordPage />;
}
