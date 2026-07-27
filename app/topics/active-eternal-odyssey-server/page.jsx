import ActiveEternalOdysseyServerKeywordPage, { generateMetadata } from './active-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEternalOdysseyServerKeywordPage />;
}
