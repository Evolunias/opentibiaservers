import ActiveMistOfDeathOpenTibiaKeywordPage, { generateMetadata } from './active-mist-of-death-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMistOfDeathOpenTibiaKeywordPage />;
}
