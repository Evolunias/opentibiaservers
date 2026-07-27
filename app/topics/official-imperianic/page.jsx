import OfficialImperianicKeywordPage, { generateMetadata } from './official-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicKeywordPage />;
}
