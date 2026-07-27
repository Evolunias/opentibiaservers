import BestRubinotTibiaKeywordPage, { generateMetadata } from './best-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotTibiaKeywordPage />;
}
