import NewOxygenotOpenTibiaKeywordPage, { generateMetadata } from './new-oxygenot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotOpenTibiaKeywordPage />;
}
