import ActiveYurotsOpenTibiaKeywordPage, { generateMetadata } from './active-yurots-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsOpenTibiaKeywordPage />;
}
