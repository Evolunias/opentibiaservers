import NewEternalOdysseyClientKeywordPage, { generateMetadata } from './new-eternal-odyssey-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEternalOdysseyClientKeywordPage />;
}
