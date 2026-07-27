import TibianusUsaServersKeywordPage, { generateMetadata } from './tibianus-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusUsaServersKeywordPage />;
}
