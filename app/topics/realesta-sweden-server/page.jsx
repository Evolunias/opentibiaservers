import RealestaSwedenServerKeywordPage, { generateMetadata } from './realesta-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaSwedenServerKeywordPage />;
}
