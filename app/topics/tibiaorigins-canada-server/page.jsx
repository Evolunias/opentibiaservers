import TibiaoriginsCanadaServerKeywordPage, { generateMetadata } from './tibiaorigins-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsCanadaServerKeywordPage />;
}
