import NoResetXanteriaOnlineKeywordPage, { generateMetadata } from './no-reset-xanteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaOnlineKeywordPage />;
}
