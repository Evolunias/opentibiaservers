import RubinotUkServerKeywordPage, { generateMetadata } from './rubinot-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotUkServerKeywordPage />;
}
