import OfficialOlderaOpenTibiaKeywordPage, { generateMetadata } from './official-oldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaOpenTibiaKeywordPage />;
}
