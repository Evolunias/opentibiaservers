import ActiveThaisotOpenTibiaKeywordPage, { generateMetadata } from './active-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotOpenTibiaKeywordPage />;
}
