import LowrateYurotsTibiaKeywordPage, { generateMetadata } from './lowrate-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsTibiaKeywordPage />;
}
