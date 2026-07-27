import OfficialCoxaotTibiaKeywordPage, { generateMetadata } from './official-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotTibiaKeywordPage />;
}
