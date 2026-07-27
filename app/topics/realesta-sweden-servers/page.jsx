import RealestaSwedenServersKeywordPage, { generateMetadata } from './realesta-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaSwedenServersKeywordPage />;
}
