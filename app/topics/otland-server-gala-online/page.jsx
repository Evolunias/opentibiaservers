import OtlandServerGalaOnlineKeywordPage, { generateMetadata } from './otland-server-gala-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaOnlineKeywordPage />;
}
