import DuraOnlineOpenTibiaKeywordPage, { generateMetadata } from './dura-online-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineOpenTibiaKeywordPage />;
}
