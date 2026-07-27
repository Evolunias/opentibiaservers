import EvoEternalOdysseyServerKeywordPage, { generateMetadata } from './evo-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoEternalOdysseyServerKeywordPage />;
}
