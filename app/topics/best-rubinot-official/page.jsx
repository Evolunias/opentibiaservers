import BestRubinotOfficialKeywordPage, { generateMetadata } from './best-rubinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotOfficialKeywordPage />;
}
