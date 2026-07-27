import OfficialYurotsTibiaKeywordPage, { generateMetadata } from './official-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsTibiaKeywordPage />;
}
