import MistOfDeathNorthAmericaServerKeywordPage, { generateMetadata } from './mist-of-death-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathNorthAmericaServerKeywordPage />;
}
