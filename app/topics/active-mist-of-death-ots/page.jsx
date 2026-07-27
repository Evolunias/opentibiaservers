import ActiveMistOfDeathOtsKeywordPage, { generateMetadata } from './active-mist-of-death-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMistOfDeathOtsKeywordPage />;
}
