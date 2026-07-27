import ActiveMistOfDeathTibiaKeywordPage, { generateMetadata } from './active-mist-of-death-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMistOfDeathTibiaKeywordPage />;
}
