import LowrateArchlightTibiaKeywordPage, { generateMetadata } from './lowrate-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightTibiaKeywordPage />;
}
