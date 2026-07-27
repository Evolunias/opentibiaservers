import TibianusNorthAmericaServersKeywordPage, { generateMetadata } from './tibianus-north-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusNorthAmericaServersKeywordPage />;
}
