import OfficialClassicusTibiaKeywordPage, { generateMetadata } from './official-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusTibiaKeywordPage />;
}
