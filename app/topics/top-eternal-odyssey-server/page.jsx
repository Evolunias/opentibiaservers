import TopEternalOdysseyServerKeywordPage, { generateMetadata } from './top-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEternalOdysseyServerKeywordPage />;
}
