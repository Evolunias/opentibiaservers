import RubinotBaiakServerPolandKeywordPage, { generateMetadata } from './rubinot-baiak-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotBaiakServerPolandKeywordPage />;
}
