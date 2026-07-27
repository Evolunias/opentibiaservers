import ActiveEternalOdysseyKeywordPage, { generateMetadata } from './active-eternal-odyssey';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEternalOdysseyKeywordPage />;
}
