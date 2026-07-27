import LowExpEternalOdysseyServerKeywordPage, { generateMetadata } from './low-exp-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpEternalOdysseyServerKeywordPage />;
}
