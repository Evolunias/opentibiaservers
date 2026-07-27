import RubinotBaiakServerUkKeywordPage, { generateMetadata } from './rubinot-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotBaiakServerUkKeywordPage />;
}
