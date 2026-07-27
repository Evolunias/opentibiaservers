import OfficialClassickDrakoriaTibiaKeywordPage, { generateMetadata } from './official-classick-drakoria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassickDrakoriaTibiaKeywordPage />;
}
