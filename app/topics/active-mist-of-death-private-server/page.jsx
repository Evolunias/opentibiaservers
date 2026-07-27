import ActiveMistOfDeathPrivateServerKeywordPage, { generateMetadata } from './active-mist-of-death-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMistOfDeathPrivateServerKeywordPage />;
}
