import CurrentBlazeraPrivateServerKeywordPage, { generateMetadata } from './current-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraPrivateServerKeywordPage />;
}
