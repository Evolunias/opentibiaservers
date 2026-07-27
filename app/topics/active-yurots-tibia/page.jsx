import ActiveYurotsTibiaKeywordPage, { generateMetadata } from './active-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsTibiaKeywordPage />;
}
