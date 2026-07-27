import ActiveOxygenotTibiaKeywordPage, { generateMetadata } from './active-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotTibiaKeywordPage />;
}
