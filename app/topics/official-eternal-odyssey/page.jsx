import OfficialEternalOdysseyKeywordPage, { generateMetadata } from './official-eternal-odyssey';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEternalOdysseyKeywordPage />;
}
