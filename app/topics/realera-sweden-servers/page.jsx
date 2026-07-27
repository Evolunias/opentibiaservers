import RealeraSwedenServersKeywordPage, { generateMetadata } from './realera-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSwedenServersKeywordPage />;
}
