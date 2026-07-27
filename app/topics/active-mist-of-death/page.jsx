import ActiveMistOfDeathKeywordPage, { generateMetadata } from './active-mist-of-death';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMistOfDeathKeywordPage />;
}
