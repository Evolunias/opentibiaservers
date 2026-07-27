import BestOxygenotTibiaKeywordPage, { generateMetadata } from './best-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOxygenotTibiaKeywordPage />;
}
