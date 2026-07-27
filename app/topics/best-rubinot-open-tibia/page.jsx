import BestRubinotOpenTibiaKeywordPage, { generateMetadata } from './best-rubinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotOpenTibiaKeywordPage />;
}
