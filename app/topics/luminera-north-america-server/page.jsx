import LumineraNorthAmericaServerKeywordPage, { generateMetadata } from './luminera-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraNorthAmericaServerKeywordPage />;
}
