import TibianusGermanyServersKeywordPage, { generateMetadata } from './tibianus-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusGermanyServersKeywordPage />;
}
