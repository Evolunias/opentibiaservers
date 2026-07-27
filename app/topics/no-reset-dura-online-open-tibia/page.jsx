import NoResetDuraOnlineOpenTibiaKeywordPage, { generateMetadata } from './no-reset-dura-online-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineOpenTibiaKeywordPage />;
}
