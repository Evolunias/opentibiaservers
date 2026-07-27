import NewOxygenotTibiaKeywordPage, { generateMetadata } from './new-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotTibiaKeywordPage />;
}
