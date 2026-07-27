import MidhemNorthAmericaServerKeywordPage, { generateMetadata } from './midhem-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemNorthAmericaServerKeywordPage />;
}
