import OfficialSerenityKeywordPage, { generateMetadata } from './official-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityKeywordPage />;
}
