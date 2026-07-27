import ActiveRubinotOpenTibiaKeywordPage, { generateMetadata } from './active-rubinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotOpenTibiaKeywordPage />;
}
