import ActiveMistOfDeathOtKeywordPage, { generateMetadata } from './active-mist-of-death-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMistOfDeathOtKeywordPage />;
}
