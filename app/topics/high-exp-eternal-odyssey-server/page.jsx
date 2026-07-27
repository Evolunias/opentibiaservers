import HighExpEternalOdysseyServerKeywordPage, { generateMetadata } from './high-exp-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpEternalOdysseyServerKeywordPage />;
}
