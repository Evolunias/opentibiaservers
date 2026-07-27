import ActiveOxygenotOpenTibiaKeywordPage, { generateMetadata } from './active-oxygenot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotOpenTibiaKeywordPage />;
}
