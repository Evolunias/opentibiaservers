import LowrateEternalOdysseyKeywordPage, { generateMetadata } from './lowrate-eternal-odyssey';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEternalOdysseyKeywordPage />;
}
