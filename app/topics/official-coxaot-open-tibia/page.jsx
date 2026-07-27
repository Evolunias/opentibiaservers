import OfficialCoxaotOpenTibiaKeywordPage, { generateMetadata } from './official-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotOpenTibiaKeywordPage />;
}
