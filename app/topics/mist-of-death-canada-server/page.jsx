import MistOfDeathCanadaServerKeywordPage, { generateMetadata } from './mist-of-death-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathCanadaServerKeywordPage />;
}
